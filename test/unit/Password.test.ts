import Password from "../../src/core/entity/Password";

test("Deve criar senha com 8 ou mais chars", function () {
    const password = new Password("12345678");
    expect(password.getValue()).toBe("12345678");
});


test("Não deve criar senha com menos que 8 chars", function () {
    expect(() => new Password("1234567")).toThrow(new Error("Invalid parameter"));
});
