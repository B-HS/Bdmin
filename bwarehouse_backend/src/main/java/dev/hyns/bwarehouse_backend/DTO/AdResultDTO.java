package dev.hyns.bwarehouse_backend.DTO;

import java.time.LocalDateTime;

import com.fasterxml.jackson.annotation.JsonInclude;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@JsonInclude(JsonInclude.Include.NON_NULL)
public class AdResultDTO {
    private ItemDTO item;
    private Long adResultId;
    private Long adOptionId;
    private String adItemName;
    private Long adCost;
    private Long adExpose;
    private Long clickCnt;
    private Long totalOrder;
    private LocalDateTime adUploadDate;

}
