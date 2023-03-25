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
public class SellDetail {
    
    @ManyToOne
    private Item item;

    @Id
    private Long sellDetailId;

    @Column
    private Long sellCnt;
    
    @Column
    private LocalDateTime sellDate;

    @Column
    private LocalDateTime sellInfoUploadDate;
}
