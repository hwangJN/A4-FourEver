package A4.FourEver.domain.trim.trim.dto;

import A4.FourEver.domain.color.exColor.dto.ExColorInfoDTO;
import A4.FourEver.domain.color.exColor.dto.ExColorInfoSortedDTO;
import A4.FourEver.domain.color.inColor.dto.InColorInfoDTO;
import A4.FourEver.domain.color.inColor.dto.InColorInfoSortedDTO;
import A4.FourEver.domain.tag.inColorTag.dto.InColorTagInfoDTO;
import A4.FourEver.domain.tag.exColorTag.dto.ExColorTagInfoDTO;
import org.springframework.stereotype.Component;

import java.util.Comparator;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

@Component
public class TrimMapper {

    public TrimConfigDTO toTrimConfigDTO(Set<InColorInfoDTO> inColorInfoDTOs, Set<ExColorInfoDTO> exColorInfoDTOs) {
        List<InColorInfoSortedDTO> inColorList = inColorInfoDTOs.stream()
                .sorted(Comparator.comparingLong(InColorInfoDTO::getId))
                .map(this::convertInColorInfoDTO)
                .collect(Collectors.toList());

        List<ExColorInfoSortedDTO> exColorList = exColorInfoDTOs.stream()
                .sorted(Comparator.comparingLong(ExColorInfoDTO::getId))
                .map(this::convertInColorInfoDTO)
                .collect(Collectors.toList());


        return TrimConfigDTO.builder()
                .inColors(inColorList)
                .exColors(exColorList)
                .build();
    }

    private InColorInfoSortedDTO convertInColorInfoDTO(InColorInfoDTO dto) {
        List<InColorTagInfoDTO> sortedInColorTag = dto.getInColorTagInfoDTOS().stream()
                .sorted(Comparator.comparingLong(InColorTagInfoDTO::getId))
                .collect(Collectors.toList());

        return InColorInfoSortedDTO.builder()
                .id(dto.getId())
                .name(dto.getName())
                .color_image(dto.getColor_image())
                .in_image(dto.getIn_image())
                .inColorTagInfoDTOS(sortedInColorTag)
                .build();
    }

    private ExColorInfoSortedDTO convertInColorInfoDTO(ExColorInfoDTO dto) {
        List<ExColorTagInfoDTO> sortedExColorTag = dto.getExColorTagInfoDTOS().stream()
                .sorted(Comparator.comparingLong(ExColorTagInfoDTO::getId))
                .collect(Collectors.toList());

        return ExColorInfoSortedDTO.builder()
                .id(dto.getId())
                .name(dto.getName())
                .color_image(dto.getColor_image())
                .rotation_image(dto.getRotation_image())
                .price(dto.getPrice())
                .exColorTagInfoDTOS(sortedExColorTag)
                .build();
    }
}
