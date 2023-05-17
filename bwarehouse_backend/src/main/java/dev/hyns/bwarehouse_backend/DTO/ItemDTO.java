package dev.hyns.bwarehouse_backend.DTO;

import java.time.LocalDateTime;
import java.util.Set;

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
public class ItemDTO {
    private Long optionId;
    private Long itemId;
    private Long custId;
    private Long brandId;
    private String itemName;
    private LocalDateTime itemUploadDate;
    private Set<ItemStatusDTO> itemStatus;
    private Set<AdResultDTO> adresult;
    private Set<InboundDTO> inbound;
    private Set<PriceRangeDTO> priceRange;
    private Set<SellDetailDTO> sellDetail;
    private Set<TesterDTO> tester;

}
