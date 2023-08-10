package A4.FourEver.domain.tag.extraOptionTag.dto;

import lombok.Builder;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import org.springframework.data.annotation.Id;

@Builder
@Getter
@EqualsAndHashCode
public class ExtraOptionTagInfoDTO {

    @Id
    private Long id;
    private String name;
    private Long count;
}
