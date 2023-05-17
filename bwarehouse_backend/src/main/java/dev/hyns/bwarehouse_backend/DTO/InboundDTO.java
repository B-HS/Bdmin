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
public class InboundDTO {
    private ItemDTO item;
    private Long inboundId;
    private String expDate;
    private String makDate;
    private LocalDateTime preInboundDate;
    private Long preInboundCnt;
    private Long actInboundCnt;
    private LocalDateTime calcReciDate;
    private LocalDateTime returnDate;
    private String storeLocation;
    private String reqId;
    private String inbAprvNum;
    private String milkrunNum;
    private LocalDateTime inboundUploadDate;

}
