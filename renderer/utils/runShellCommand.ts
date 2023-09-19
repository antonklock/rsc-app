import * as child_process from 'child_process';
import { resolve } from 'path';

export async function runLsCommand(): Promise<string> {
    // let command = "/Users/antonklock/Desktop/AE\ Test/Script/render";
    let command = "'/Users/antonklock/Desktop/AE Test/Script/render'";

    const child = child_process.spawn(command, [], {
        shell: true,
    });

    console.log("child", child);

    const stdout = await new Promise<string>((resolve, reject) => {
        child.stdout.on('data', (data) => resolve(data.toString()));
        child.stderr.on('data', (data) => reject(data.toString()));
    });

    return stdout;
}