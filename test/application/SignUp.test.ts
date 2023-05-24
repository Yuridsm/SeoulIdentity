import UserRepositoryInMemory from "../../src/infrastructure/repository/inMemory/UserRepositoryInMemory";
import LogInUseCase from "../../src/application/useCase/LogInUseCase";
import SignUpUseCase from "../../src/application/useCase/SignUpUseCase";

test("Deve fazer o singup", async function () {
    // Arrange
    const userRepository = new UserRepositoryInMemory();

    const signup = new SignUpUseCase(userRepository);
    
    const inputSignUp = {
        name: "Yuri Melo",
        email: "yuri@mail.com",
        password: "12345678",
        age: 25
    }
    
    // Act
    await signup.execute(inputSignUp);

    // Assert
    const login = new LogInUseCase(userRepository);
    const inputLogIn = {
        email: "yuri@mail.com",
        password: "12345678"
    }
    
    const output = await login.execute(inputLogIn);
    expect(output.name).toBe("Yuri Melo");
    expect(output.token).toBe("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Inl1cmlAbWFpbC5jb20iLCJpYXQiOjE2ODQ5NjU1OTkwMDAsImV4cGlyZXNJbiI6MTAwMDAwfQ.K9n5e1A3RDB_VAOhf4Pxypv_FJKX6HqQTLO737C9Sds");
});
