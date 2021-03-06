/* WARNING: This file is automatically generated. Please edit the files in the /generation/tests directory. */
import { expect, test } from "@oclif/test"
import { cred } from "../../src/credentials"

const queueId = "userInput-queueId"
const callId = "userInput-callId"

describe("queue-members:dequeue Data Test", function () {
    const testJson = {
        message: "Response from server",
    }

    const nockServerResponse = `{
  "message": "Response from server"
}`

    test.nock("https://www.freeclimb.com", async (api) =>
        api
            .post(
                `/apiserver/Accounts/${await cred.accountId}/Queues/${queueId}/Members/${callId}`,
                {}
            )
            .query({})
            .basicAuth({ user: await cred.accountId, pass: await cred.authToken })
            .reply(200, testJson)
    )
        .stdout()
        .command(["queue-members:dequeue", "userInput-queueId", "userInput-callId"])
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
            .post(
                `/apiserver/Accounts/${await cred.accountId}/Queues/${queueId}/Members/${callId}`,
                {}
            )
            .query({})
            .basicAuth({ user: await cred.accountId, pass: await cred.authToken })
            .reply(500, testJsonErrorNoSuggestion)
    )
        .stdout()
        .command(["queue-members:dequeue", "userInput-queueId", "userInput-callId"])
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
            .post(
                `/apiserver/Accounts/${await cred.accountId}/Queues/${queueId}/Members/${callId}`,
                {}
            )
            .query({})
            .basicAuth({ user: await cred.accountId, pass: await cred.authToken })
            .reply(500, testJsonErrorWithSuggestion)
    )
        .stdout()
        .command(["queue-members:dequeue", "userInput-queueId", "userInput-callId"])
        .exit(3)
        .it("Test Freeclimb Api error repsonce is process correctly with a suggestion")

    test.stdout()
        .command([
            "queue-members:dequeue",
            "userInput-queueId",
            "userInput-callId",
            "additionalArguments",
        ])
        .exit(2)
        .it("Test parse error gets triggered when there is an additional argument")

    describe("queue-members:dequeue next flag test", function () {
        test.nock("https://www.freeclimb.com", async (api) =>
            api
                .post(
                    `/apiserver/Accounts/${await cred.accountId}/Queues/${queueId}/Members/${callId}`,
                    {}
                )
                .query({})
                .basicAuth({ user: await cred.accountId, pass: await cred.authToken })
                .reply(200, testJson)
        )
            .stdout()
            .env({ FREECLIMB_QUEUE_MEMBERS_DEQUEUE_NEXT: undefined })
            .command(["queue-members:dequeue", "userInput-queueId", "userInput-callId"])
            .command(["queue-members:dequeue", "userInput-queueId", "userInput-callId", "--next"])
            .exit(3)
            .it("Tests return of Exit Code 3 when flag next is not available")
    })
})

describe("queue-members:dequeue Status Test", function () {
    const testJsonStatus = ""

    const statusResponse = `Received a success code from FreeClimb. There is no further output.
`

    test.nock("https://www.freeclimb.com", async (api) =>
        api
            .post(
                `/apiserver/Accounts/${await cred.accountId}/Queues/${queueId}/Members/${callId}`,
                {}
            )
            .query({})
            .basicAuth({ user: await cred.accountId, pass: await cred.authToken })
            .reply(204, testJsonStatus)
    )
        .stdout()
        .command(["queue-members:dequeue", "userInput-queueId", "userInput-callId"])
        .it("Test all required paramaters", async (ctx) => {
            expect(ctx.stdout).to.contain(statusResponse)
        })
})
