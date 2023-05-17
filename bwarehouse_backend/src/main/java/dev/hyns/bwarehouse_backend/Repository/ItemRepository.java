package dev.hyns.bwarehouse_backend.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import dev.hyns.bwarehouse_backend.Entity.Item;

public interface ItemRepository extends JpaRepository<Item, Long> {

}
