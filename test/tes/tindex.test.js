const { capitalizeWords, filterActiveUsers, logAction } = require('../../index')

test("capitalizeWords", () => {
    expect(capitalizeWords("hello world")).toBe("Hello World")
});

describe("filterActiveUsers", () => {
    test("filters mixed active/inactive users",() => {
        const users = [
            { name: "Woods", isActive: true },
            { name: "Sylvia", isActive: false },
            { name: "Lydia", isActive: true }
        ];
        const result = filterActiveUsers(users);
        expect(result).toHaveLength(2);
        expect(result[0].name).toBe("Woods");

     });

    test("filters all inactive",() => {
        const users = [
            { name: "Wania", isActive: false },
            { name: "Wambui", isActive: false }
        ];
        expect(filterActiveUsers(users)).toEqual([]);

    });

    test("filters empty array", () => {
        expect(filterActiveUsers([])).toEqual([]);
    })
});

describe("logAction", () => {
    test("generates the correct log string", () => {
        const result = logAction("login", "Woods");
        expect(result).toMatch(/^User Woods performed login at .+$/);
    });
    
    test("missing action or username", () => {
        const result = logAction(undefined, "Woods");
        expect(result).toMatch(/^User Woods performed undefined at .+$/);
    });
    test("handles empty strings", () => {
        const result = logAction("", "");
        expect(result).toMatch(/^User  performed  at .+$/);
 });
});

