package A4.FourEver.domain.trim.trim.repository;

import A4.FourEver.domain.color.exColor.dto.ExColorInfoDTO;
import A4.FourEver.domain.color.inColor.dto.InColorInfoDTO;
import A4.FourEver.domain.tag.exColorTag.dto.ExColorTagInfoDTO;
import A4.FourEver.domain.tag.inColorTag.dto.InColorTagInfoDTO;
import A4.FourEver.domain.trim.trim.domain.Trim;
import org.springframework.data.jdbc.repository.query.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.jdbc.core.ResultSetExtractor;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.HashSet;
import java.util.Optional;
import java.util.Set;

public interface TrimRepository extends CrudRepository<Trim, Long> {

    @Query(value = "SELECT DISTINCT " +
            "io.*, " +
            "iot.id AS tag_id, " +
            "iot.name AS tag_name, " +
            "iot.count AS tag_count " +
            "FROM in_color io " +
            "LEFT JOIN in_color_tag iot ON io.id = iot.in_color_id " +
            "WHERE io.trim_id = :trimId"
    , resultSetExtractorClass = InColorDTOExtractor.class)
    Set<InColorInfoDTO> getInColorAndTagByTrimId(@Param("trimId") Long trimId);

    @Query(value = "SELECT DISTINCT " +
            "ec.*, " +
            "ect.id AS tag_id, " +
            "ect.name AS tag_name, " +
            "ect.count AS tag_count " +
            "FROM ex_color ec " +
            "LEFT JOIN ex_color_tag ect ON ec.id = ect.ex_color_id " +
            "WHERE ec.trim_id = :trimId"
            , resultSetExtractorClass = ExColorDTOExtractor.class)
    Set<ExColorInfoDTO> getExColorAndTagByTrimId(@Param("trimId") Long trimId);

    class InColorDTOExtractor implements ResultSetExtractor<Set<InColorInfoDTO>> {

        @Override
        public Set<InColorInfoDTO> extractData(ResultSet rs) throws SQLException {
            Set<InColorInfoDTO> inColorDTOs = new HashSet<>();

            while (rs.next()) {
                InColorTagInfoDTO exColorTagInfoDTO = InColorTagInfoDTO.builder()
                        .id(rs.getLong("tag_id"))
                        .name(rs.getString("tag_name"))
                        .count(rs.getLong("tag_count"))
                        .build();

                Long in_color_id = rs.getLong("id");

                Optional<InColorInfoDTO> inColorDTOOpt = inColorDTOs.stream()
                        .filter(inColorInfoDTO -> matchesInColorId(inColorInfoDTO, in_color_id))
                        .findFirst();

                InColorInfoDTO inColorDTO = inColorDTOOpt.orElse(null);

                if (inColorDTOOpt.isEmpty()) {
                    Set<InColorTagInfoDTO> colorTagInfoDTOs = new HashSet<>();

                    inColorDTO = InColorInfoDTO.builder()
                            .id(rs.getLong("id"))
                            .name(rs.getString("name"))
                            .color_image(rs.getString("color_image"))
                            .in_image(rs.getString("in_image"))
                            .inColorTagInfoDTOS(colorTagInfoDTOs)
                            .build();
                }

                inColorDTO.getInColorTagInfoDTOS().add(exColorTagInfoDTO);

                inColorDTOs.add(inColorDTO);
            }

            return inColorDTOs;
        }

        private boolean matchesInColorId(InColorInfoDTO dto, Long id) {
            return dto.getId().equals(id);
        }
    }

    class ExColorDTOExtractor implements ResultSetExtractor<Set<ExColorInfoDTO>> {

        @Override
        public Set<ExColorInfoDTO> extractData(ResultSet rs) throws SQLException {
            Set<ExColorInfoDTO> exColorDTOs = new HashSet<>();

            while (rs.next()) {
                ExColorTagInfoDTO exColorTagInfoDTO = ExColorTagInfoDTO.builder()
                        .id(rs.getLong("tag_id"))
                        .name(rs.getString("tag_name"))
                        .count(rs.getLong("tag_count"))
                        .build();

                Long ex_color_id = rs.getLong("id");

                Optional<ExColorInfoDTO> exColorDTOOpt = exColorDTOs.stream()
                        .filter(exColorInfoDTO -> matchesExColorId(exColorInfoDTO, ex_color_id))
                        .findFirst();

                ExColorInfoDTO exColorDTO = exColorDTOOpt.orElse(null);

                if (exColorDTOOpt.isEmpty()) {
                    Set<ExColorTagInfoDTO> colorTagInfoDTOs = new HashSet<>();

                    exColorDTO = ExColorInfoDTO.builder()
                            .id(rs.getLong("id"))
                            .name(rs.getString("name"))
                            .color_image(rs.getString("color_image"))
                            .rotation_image(rs.getString("rotation_image"))
                            .price(rs.getDouble("price"))
                            .exColorTagInfoDTOS(colorTagInfoDTOs)
                            .build();
                }

                exColorDTO.getExColorTagInfoDTOS().add(exColorTagInfoDTO);

                exColorDTOs.add(exColorDTO);
            }

            return exColorDTOs;
        }

        private boolean matchesExColorId(ExColorInfoDTO dto, Long id) {
            return dto.getId().equals(id);
        }
    }
}
