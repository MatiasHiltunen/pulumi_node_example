import * as pulumi from "@pulumi/pulumi";
import {local} from "@pulumi/command";

const config = new pulumi.Config();
const command = config.require("message");

const helloDevOpsYAMK = new local.Command("hello-devops-yamk", {
    create: "node file.cjs create",
    update: "node file.cjs create",
    delete: "node file.cjs delete",
    environment: {
        "HELLO_DEVOPS_YAMK": command
    }
});

export const file = "hello.txt"
export const content = helloDevOpsYAMK.stdout