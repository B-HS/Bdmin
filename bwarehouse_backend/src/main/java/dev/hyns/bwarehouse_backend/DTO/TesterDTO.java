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
public class TesterDTO {
    private ItemDTO item;
    private Long testerId;
    private LocalDateTime buyDate;
    private String buyerName;
    private String buyerPhone;
    private String buyerAcount;
    private String buyerMail;
    private LocalDateTime testerUploadDate;

}
