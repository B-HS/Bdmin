package dev.hyns.bwarehouse_backend.Entity;

import java.time.LocalDateTime;

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
public class Inbound {
    @ManyToOne
    private Item item;

    @Id
    private Long inboundId;

    @Column
    private String expDate;

    @Column
    private String makDate;

    @Column
    private LocalDateTime preInboundDate;

    @Column
    private Long preInboundCnt;

    @Column
    private Long actInboundCnt;

    @Column
    private LocalDateTime calcReciDate;

    @Column
    private LocalDateTime returnDate;

    @Column
    private String storeLocation;

    @Column
    private String reqId;

    @Column
    private String inbAprvNum;

    @Column
    private String milkrunNum;

    @Column
    private LocalDateTime inboundUploadDate;

}
