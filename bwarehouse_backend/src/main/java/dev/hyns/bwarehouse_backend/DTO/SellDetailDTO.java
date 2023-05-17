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
public class SellDetailDTO {
    private ItemDTO item;
    private Long sellDetailId;
    private Long sellCnt;
    private LocalDateTime sellDate;
    private LocalDateTime sellInfoUploadDate;
}
