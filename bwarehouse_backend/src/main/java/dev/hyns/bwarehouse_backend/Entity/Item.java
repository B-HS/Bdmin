package dev.hyns.bwarehouse_backend.Entity;

import java.time.LocalDateTime;
import java.util.LinkedHashSet;
import java.util.Set;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@Getter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Item {
    @Id
    private Long optionId;

    @Column
    private Long itemId;

    @Column
    private Long custId;

    @Column
    private Long brandId;

    @Column
    private String itemName;

    @Column
    private LocalDateTime itemUploadDate;


    @Builder.Default
    @OneToMany(mappedBy = "item", orphanRemoval = false, fetch = FetchType.LAZY)
    private Set<ItemStatus> itemStatus = new LinkedHashSet<>();

    @Builder.Default
    @OneToMany(mappedBy = "item", orphanRemoval = false, fetch = FetchType.LAZY)
    private Set<AdResult> adresult = new LinkedHashSet<>();

    @Builder.Default
    @OneToMany(mappedBy = "item", orphanRemoval = false, fetch = FetchType.LAZY)
    private Set<Inbound> inbound = new LinkedHashSet<>();

    @Builder.Default
    @OneToMany(mappedBy = "item", orphanRemoval = false, fetch = FetchType.LAZY)
    private Set<PriceRange> priceRange = new LinkedHashSet<>();

    @Builder.Default
    @OneToMany(mappedBy = "item", orphanRemoval = false, fetch = FetchType.LAZY)
    private Set<SellDetail> sellDetail = new LinkedHashSet<>();

    @Builder.Default
    @OneToMany(mappedBy = "item", orphanRemoval = false, fetch = FetchType.LAZY)
    private Set<Tester> tester = new LinkedHashSet<>();

}
