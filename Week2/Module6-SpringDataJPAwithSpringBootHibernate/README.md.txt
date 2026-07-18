# Hands-on 4: Difference between JPA, Hibernate and Spring Data JPA

## Java Persistence API (JPA)

Java Persistence API (JPA) is a Java specification (JSR 338) used for persisting, reading, and managing data between Java objects and relational databases.

### Features
- Defines the standard API for Object Relational Mapping (ORM).
- Provides annotations such as `@Entity`, `@Table`, `@Id`, and `@Column`.
- Does not provide any implementation.
- Requires an implementation such as Hibernate.

---

## Hibernate

Hibernate is an Object Relational Mapping (ORM) framework and one of the most widely used implementations of JPA.

### Features
- Implements the JPA specification.
- Maps Java objects to database tables.
- Supports HQL (Hibernate Query Language).
- Provides caching and transaction management.

---

## Spring Data JPA

Spring Data JPA is a Spring Framework module built on top of JPA. It simplifies database access by reducing boilerplate code.

### Features
- Uses repository interfaces.
- Automatically provides CRUD operations.
- Supports custom query methods.
- Integrates seamlessly with Spring Boot.
- Manages transactions using Spring.

---

# Comparison

| Feature | JPA | Hibernate | Spring Data JPA |
|---------|-----|-----------|-----------------|
| Type | Specification | ORM Framework | Spring Module |
| Implementation | ❌ No | ✅ Yes | ❌ No |
| ORM Support | Through implementation | ✅ Yes | Uses Hibernate/JPA |
| Boilerplate Code | High | Medium | Low |
| CRUD Operations | Manual | Manual | Automatic |
| Transaction Management | Provider Dependent | Yes | Spring Managed |

---

# Hibernate Example

```java
public Integer addEmployee(Employee employee) {
    Session session = factory.openSession();
    Transaction tx = null;
    Integer employeeID = null;

    try {
        tx = session.beginTransaction();
        employeeID = (Integer) session.save(employee);
        tx.commit();
    } catch (HibernateException e) {
        if (tx != null)
            tx.rollback();
        e.printStackTrace();
    } finally {
        session.close();
    }
    return employeeID;
}
```

---

# Spring Data JPA Example

### EmployeeRepository.java

```java
public interface EmployeeRepository extends JpaRepository<Employee, Integer> {

}
```

### EmployeeService.java

```java
@Autowired
private EmployeeRepository employeeRepository;

@Transactional
public void addEmployee(Employee employee) {
    employeeRepository.save(employee);
}
```

---

# Advantages of Spring Data JPA

- Reduces boilerplate code.
- Simplifies CRUD operations.
- Automatic repository implementation.
- Easy integration with Spring Boot.
- Built-in transaction management.

---

# Conclusion

- **JPA** is a specification that defines how Java objects are mapped to relational databases.
- **Hibernate** is an implementation of the JPA specification and provides ORM functionality.
- **Spring Data JPA** is built on top of JPA and Hibernate, reducing boilerplate code by providing repository interfaces and automatic CRUD operations.