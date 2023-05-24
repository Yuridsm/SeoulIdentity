import CheckAuthUseCase from "../../src/application/useCase/CheckAuthUseCase";

test("Deve verificar a autneticação de um user", async function() {
    const checkAuth = new CheckAuthUseCase();
    const input = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Inl1cmlAbWFpbC5jb20iLCJpYXQiOjE2ODQ5NjU1OTkwMDAsImV4cGlyZXNJbiI6MTAwMDAwfQ.K9n5e1A3RDB_VAOhf4Pxypv_FJKX6HqQTLO737C9Sds";
    const output = await checkAuth.execute(input);
    expect(output.email).toBe("yuri@mail.com");
});