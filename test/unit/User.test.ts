import User from "../../src/core/entity/User";

test("Deve criar um novo user", async function() {
    const user = await User.Factory("Yuri Melo", "yuri@mail.com", "12345678", 25);

    expect(user.name.getValue()).toBe("Yuri Melo");
    expect(user.email.getValue()).toBe("yuri@mail.com");
    expect(user.password.getValue()).toBe("f1fa680348802c16e610e0afa109ef9fd2ea21001bf0449ea4372229cee93a13c3eb08a30068a92b82d376d195f5ed4bebfd9b51413a0ae23dbb38da9141a4b4");
    expect(user.age).toBe(25);
});

test("Não deve criar user se name for inválido", function() {
    expect(() => User.Factory("Yuri", "yuri@mail.com", "12345678", 25)).rejects.toThrow("Invalid parameter");
});

test("Não deve criar user se e-mail for inválido", function() {
    expect(() => User.Factory("Yuri Melo", "yuri@", "12345678", 25)).rejects.toThrow("Invalid parameter");
});

test("Não deve criar user se password for inválido", function() {
    expect(() => User.Factory("Yuri Melo", "yuri@mail.com", "7", 25)).rejects.toThrow("Invalid parameter");
});

test("Não deve criar user se age for inválido", function() {
    expect(() => User.Factory("Yuri Melo", "yuri@mail.com", "12345678", 17)).rejects.toThrow("Invalid parameter");
});
