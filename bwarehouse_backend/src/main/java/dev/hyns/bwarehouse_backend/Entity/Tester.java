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
public class Tester {
    @ManyToOne
    private Item item;

    @Id
    private Long testerId;

    @Column
    private LocalDateTime buyDate;

    @Column
    private String buyerName;

    @Column
    private String buyerPhone;

    @Column
    private String buyerAcount;

    @Column
    private String buyerMail;

    @Column
    private LocalDateTime testerUploadDate;

}
