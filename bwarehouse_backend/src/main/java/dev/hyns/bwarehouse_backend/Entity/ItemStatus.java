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
public class ItemStatus {

    @ManyToOne
    private Item item;

    @Id
    private Long itemStatusId;

    @Column
    private boolean aprv;

    @Column
    private String status;

    @Column
    private Long price;

    @Column
    private Long restItem;

    @Column
    private LocalDateTime itemStatusUploadDate;

}
