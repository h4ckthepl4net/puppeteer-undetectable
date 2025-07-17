
import { ChildProcess } from 'child_process';

// Re-export everything from rebrowser-puppeteer-core
export * from "rebrowser-puppeteer-core";

// Extend the Browser interface from rebrowser-puppeteer-core
declare module "rebrowser-puppeteer-core" {
    interface Browser {
        launcherProcess(): ChildProcess | undefined;
    }
}