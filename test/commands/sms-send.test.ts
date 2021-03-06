/* WARNING: This file is automatically generated. Please edit the files in the /generation/tests directory. */
import { expect, test } from "@oclif/test"
import { cred } from "../../src/credentials"

describe("sms:send Data Test", function () {
    const testJson = {
        message: "Response from server",
    }

    const nockServerResponse = `{
  "message": "Response from server"
}`

    test.nock("https://www.freeclimb.com", async (api) =>
        api
            .post(`/apiserver/Accounts/${await cred.accountId}/Messages`, {
                from: "userInput-from",
                to: "userInput-to",
                text: "userInput-text",
            })
            .query({})
            .basicAuth({ user: await cred.accountId, pass: await cred.authToken })
            .reply(200, testJson)
    )
        .stdout()
        .command(["sms:send", "userInput-from", "userInput-to", "userInput-text"])
        .it("Test all required paramaters", async (ctx) => {
            expect(ctx.stdout).to.contain(nockServerResponse)
        })

    const testJsonErrorNoSuggestion = {
        code: 2,
        message: "Method Not Allowed",
        url: "https://docs.freeclimb.com/reference/error-and-warning-dictionary#2",
        details: {},
    }

    const nockServerResponseErrorNoSuggestion = `starting test`

    test.nock("https://www.freeclimb.com", async (api) =>
        api
            .post(`/apiserver/Accounts/${await cred.accountId}/Messages`, {
                from: "userInput-from",
                to: "userInput-to",
                text: "userInput-text",
            })
            .query({})
            .basicAuth({ user: await cred.accountId, pass: await cred.authToken })
            .reply(500, testJsonErrorNoSuggestion)
    )
        .stdout()
        .command(["sms:send", "userInput-from", "userInput-to", "userInput-text"])
        .exit(3)
        .it("Test Freeclimb Api error repsonce is process correctly without a suggestion")

    const testJsonErrorWithSuggestion = {
        code: 50,
        message: "Unauthorized To Make Request",
        url: "https://docs.freeclimb.com/reference/error-and-warning-dictionary#50",
        details: {},
    }

    const nockServerResponseErrorWithSuggestion = `starting test`

    test.nock("https://www.freeclimb.com", async (api) =>
        api
            .post(`/apiserver/Accounts/${await cred.accountId}/Messages`, {
                from: "userInput-from",
                to: "userInput-to",
                text: "userInput-text",
            })
            .query({})
            .basicAuth({ user: await cred.accountId, pass: await cred.authToken })
            .reply(500, testJsonErrorWithSuggestion)
    )
        .stdout()
        .command(["sms:send", "userInput-from", "userInput-to", "userInput-text"])
        .exit(3)
        .it("Test Freeclimb Api error repsonce is process correctly with a suggestion")

    test.stdout()
        .command([
            "sms:send",
            "userInput-from",
            "userInput-to",
            "userInput-text",
            "additionalArguments",
        ])
        .exit(2)
        .it("Test parse error gets triggered when there is an additional argument")

    test.nock("https://www.freeclimb.com", async (api) =>
        api
            .post(`/apiserver/Accounts/${await cred.accountId}/Messages`, {
                from: "userInput-from",
                to: "userInput-to",
                text: "userInput-text",
                notificationUrl: "userInput-notificationUrl",
                accountId: "userInput-accountId",
            })
            .query({})
            .basicAuth({ user: await cred.accountId, pass: await cred.authToken })
            .reply(200, testJson)
    )
        .stdout()
        .command([
            "sms:send",
            "userInput-from",
            "userInput-to",
            "userInput-text",
            "--notificationUrl",
            "userInput-notificationUrl",
            "--accountId",
            "userInput-accountId",
        ])
        .it(
            "testing all body parameters together and required query are sent through with request",
            async (ctx) => {
                expect(ctx.stdout).to.contain(nockServerResponse)
            }
        )

    describe("sms:send body param flags", function () {
        test.nock("https://www.freeclimb.com", async (api) =>
            api
                .post(`/apiserver/Accounts/${await cred.accountId}/Messages`, {
                    from: "userInput-from",
                    to: "userInput-to",
                    text: "userInput-text",
                    notificationUrl: "userInput-notificationUrl",
                })
                .query({})
                .basicAuth({ user: await cred.accountId, pass: await cred.authToken })
                .reply(200, testJson)
        )
            .stdout()
            .command([
                "sms:send",
                "userInput-from",
                "userInput-to",
                "userInput-text",
                "--notificationUrl",
                "userInput-notificationUrl",
            ])
            .it(
                "required params and a body param is sent through with request-notificationUrl",
                async (ctx) => {
                    expect(ctx.stdout).to.contain(nockServerResponse)
                }
            )

        test.nock("https://www.freeclimb.com", async (api) =>
            api
                .post(`/apiserver/Accounts/${await cred.accountId}/Messages`, {
                    from: "userInput-from",
                    to: "userInput-to",
                    text: "userInput-text",
                    accountId: "userInput-accountId",
                })
                .query({})
                .basicAuth({ user: await cred.accountId, pass: await cred.authToken })
                .reply(200, testJson)
        )
            .stdout()
            .command([
                "sms:send",
                "userInput-from",
                "userInput-to",
                "userInput-text",
                "--accountId",
                "userInput-accountId",
            ])
            .it(
                "required params and a body param is sent through with request-accountId",
                async (ctx) => {
                    expect(ctx.stdout).to.contain(nockServerResponse)
                }
            )
    })

    describe("sms:send next flag test", function () {
        test.nock("https://www.freeclimb.com", async (api) =>
            api
                .post(`/apiserver/Accounts/${await cred.accountId}/Messages`, {
                    from: "userInput-from",
                    to: "userInput-to",
                    text: "userInput-text",
                })
                .query({})
                .basicAuth({ user: await cred.accountId, pass: await cred.authToken })
                .reply(200, testJson)
        )
            .stdout()
            .env({ FREECLIMB_SMS_SEND_NEXT: undefined })
            .command(["sms:send", "userInput-from", "userInput-to", "userInput-text"])
            .command(["sms:send", "userInput-from", "userInput-to", "userInput-text", "--next"])
            .exit(3)
            .it("Tests return of Exit Code 3 when flag next is not available")
    })
})

describe("sms:send Status Test", function () {
    const testJsonStatus = ""

    const statusResponse = `Received a success code from FreeClimb. There is no further output.
`

    test.nock("https://www.freeclimb.com", async (api) =>
        api
            .post(`/apiserver/Accounts/${await cred.accountId}/Messages`, {
                from: "userInput-from",
                to: "userInput-to",
                text: "userInput-text",
            })
            .query({})
            .basicAuth({ user: await cred.accountId, pass: await cred.authToken })
            .reply(204, testJsonStatus)
    )
        .stdout()
        .command(["sms:send", "userInput-from", "userInput-to", "userInput-text"])
        .it("Test all required paramaters", async (ctx) => {
            expect(ctx.stdout).to.contain(statusResponse)
        })
})
