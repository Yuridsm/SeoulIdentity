import Password from "../../src/core/entity/Password";

test("Deve criar senha com 8 ou mais chars", async function () {
    const password = await Password.Factory("12345678", "salt");
    expect(password.getValue()).toBe("f1fa680348802c16e610e0afa109ef9fd2ea21001bf0449ea4372229cee93a13c3eb08a30068a92b82d376d195f5ed4bebfd9b51413a0ae23dbb38da9141a4b4");
    expect(password.getSalt()).toBe("salt");
});

test("Não deve criar senha com menos que 8 chars", function () {
    expect(() => new Password("1234567")).toThrow(new Error("Invalid parameter"));
});
