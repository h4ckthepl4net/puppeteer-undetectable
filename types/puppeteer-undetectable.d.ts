import type { Browser, Page } from "rebrowser-puppeteer-core";
import type { GhostCursor } from "ghost-cursor";


export interface PageWithCursor extends Page {
    realClick: GhostCursor["click"];
    realCursor: GhostCursor;
}

export interface ProxyOptions {
    host: string;
    port: number;
    username?: string;
    password?: string;
}

declare module "puppeteer-undetectable" {

	export function connect(options: Options): Promise<ConnectResult>;

	export type { PageWithCursor, ProxyOptions };

	type ConnectResult = {
		browser: Browser;
		page: PageWithCursor;
	};

	interface Options {
		args?: string[];
		headless?: boolean;
		customConfig?: import("chrome-launcher").Options;
		proxy?: ProxyOptions;
		turnstile?: boolean;
		connectOption?: import("rebrowser-puppeteer-core").ConnectOptions;
		disableXvfb?: boolean;
		plugins?: import("puppeteer-extra").PuppeteerExtraPlugin[];
		ignoreAllFlags?: boolean;
	}
}