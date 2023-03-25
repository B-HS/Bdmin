package dev.hyns.bwarehouse_backend.Entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@Getter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class AdResult {
    @ManyToOne
    private Item item;

    @Id
    private Long adResultId;

    @Column
    private Long adOptionId;

    @Column
    private String adItemName;

    @Column
    private Long adCost;

    @Column
    private Long adExpose;

    @Column
    private Long clickCnt;

    @Column
    private Long totalOrder;

}
