import type { Browser, Page } from "rebrowser-puppeteer-core";
import type { Xvfb } from "xvfb";
import { launch } from "chrome-launcher";
import type { PageWithCursor, ProxyOptions } from "puppeteer-undetectable";

declare module "puppeteer-undetectable/page-controller" {
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