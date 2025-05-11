import type { Browser, Page } from "rebrowser-puppeteer-core";
import type { GhostCursor } from "ghost-cursor";
import type { Xvfb } from "xvfb";
import { launch } from "chrome-launcher";

interface PageWithCursor extends Page {
	realClick: GhostCursor["click"];
	realCursor: GhostCursor;
}

interface ProxyOptions {
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

declare module "puppeteer-undetectable/lib/module/pageController" {
	export function pageController(options: PageControllerOptions): Promise<PageWithCursor>;

	interface PageControllerOptions {
		browser: Browser;
		page: Page;
		proxy: ProxyOptions;
		plugins: import("puppeteer-extra").PuppeteerExtraPlugin[];
		turnstile?: boolean;
		xvfbsession?: Xvfb;	
		pid?: number;
		killProcess?: boolean;
		chrome?: Awaited<ReturnType<typeof launch>>;
	};
}
