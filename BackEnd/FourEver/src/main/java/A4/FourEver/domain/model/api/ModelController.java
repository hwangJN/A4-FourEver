package A4.FourEver.domain.model.api;

import A4.FourEver.domain.model.application.ModelService;
import A4.FourEver.domain.model.dto.ModelOptionInfoSortedDTO;
import io.swagger.v3.oas.annotations.Operation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/model")
public class ModelController {

    @Autowired
    private ModelService modelService;

    @Operation(summary = "해당 모델의 옵션 정보 조회")
    @GetMapping("/option")
    public ModelOptionInfoSortedDTO getModelOption(
            @RequestParam("trim_id") final Long trim_id,
            @RequestParam("body_id") final Long body_id,
            @RequestParam("engine_id") final Long engine_id,
            @RequestParam("drive_id") final Long drive_id) {
        return modelService.getModelOption(trim_id, body_id, engine_id, drive_id);
    }
}
