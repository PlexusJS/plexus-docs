import React from "react"
import clsx from "clsx"
import Layout from "@theme/Layout"
import Link from "@docusaurus/Link"
import useDocusaurusContext from "@docusaurus/useDocusaurusContext"
import styles from "./index.module.css"
import HomepageFeatures from "@site/src/components/HomepageFeatures"
import { motion } from "framer-motion"
import Head from "@docusaurus/Head"

function HomepageHeader() {
	const { siteConfig } = useDocusaurusContext()
	return (
		<header className={`flex flex-col items-center justify-center w-full transition-all duration-75`}>
			<div className="container w-full h-screen">
				{/* <img src="/img/TransparentLogo.svg" /> */}
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="3 171.5 406.99000549316406 232">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						xmlnsXlink="http://www.w3.org/1999/xlink"
						version="1.1"
						id="Layer_1"
						x="73"
						y="241.5"
						viewBox="51.4899787902832 43.31000900268555 102.280029296875 113.22000122070312"
						xmlSpace="preserve"
						height="92"
						width="83.1104399127617"
						preserveAspectRatio="xMinYMin"
						enable-background="new 0 0 800 600"
						style={{ overflow: "visible" }}
					>
						<motion.path
							className="st0"
							d="M152.39,97.21c0.91-2.55,1.38-5.22,1.38-7.92c0-7.15-3.2-13.82-8.77-18.3l-4.75-3.82  c-2.79-2.24-4.9-5.22-6.08-8.6l-1.58-4.49c-2.26-6.44-8.36-10.77-15.19-10.77h-2.8c-4.91,0-9.26,2.39-11.97,6.06  c-2.72-3.67-7.07-6.06-11.97-6.06h-2.8c-6.82,0-12.93,4.33-15.19,10.77l-1.58,4.49c-1.19,3.38-3.29,6.35-6.08,8.6l-4.75,3.81  c-5.58,4.48-8.77,11.15-8.77,18.3c0,2.71,0.46,5.37,1.38,7.92c0.63,1.75,0.63,3.68,0,5.43c-0.91,2.55-1.38,5.22-1.38,7.92  c0,7.15,3.2,13.82,8.77,18.3l4.75,3.82c2.79,2.24,4.9,5.22,6.08,8.6l1.58,4.49c2.26,6.44,8.36,10.77,15.19,10.77h2.8  c4.91,0,9.26-2.39,11.97-6.06c2.72,3.67,7.07,6.06,11.97,6.06h2.8c6.82,0,12.93-4.33,15.19-10.77l1.58-4.49  c1.19-3.38,3.29-6.35,6.08-8.6l4.75-3.81c5.58-4.48,8.77-11.15,8.77-18.3c0-2.71-0.46-5.37-1.38-7.92  C151.77,100.88,151.77,98.96,152.39,97.21z M99.69,141.62c0,4.98-4.05,9.04-9.04,9.04h-2.8c-4.33,0-8.21-2.75-9.64-6.84l-0.48-1.38  c7.89-2.99,13.24-9.28,14.98-14.28l0.96-2.77l-6.22,0l-0.29,0.84c-1.3,3.73-5.67,8.48-11.51,10.73c-1.62-3.43-3.98-6.47-6.96-8.86  l-4.75-3.82c-0.12-0.1-0.23-0.21-0.35-0.32c0.01,0,0.02,0,0.03,0c8.7,0,14.54-3.61,18.12-7.06c6.9-6.63,9.02-15.85,8.06-21.6  l-0.48-2.9l-5.46,2.98L84,96.27c0.72,4.31-1.26,11.52-6.33,16.4c-4.72,4.54-11.2,6.25-18.79,5.01c-0.98-2.21-1.52-4.62-1.52-7.12  c0-2.03,0.35-4.03,1.03-5.94c1.09-3.03,1.09-6.36,0-9.39c-0.69-1.91-1.03-3.91-1.03-5.94c0-3.5,1.04-6.84,2.91-9.68  c4.87,1.41,7.11,5.03,8.14,7.98c0.82,2.34,1,4.72,0.83,6.67l0,0c0,0-0.01,0.04-0.01,0.1c-0.07,0.75-0.2,1.42-0.37,2.01  c-0.29,1.29-0.76,2.97-1.49,4.37l4.95,1.4c3.04-3.33,3.74-10.42,1.63-16.49c-1.73-4.96-4.96-8.62-9.31-10.66l4.04-3.25  c3.65-2.93,6.4-6.81,7.95-11.23l1.58-4.49c1.43-4.09,5.31-6.84,9.64-6.84h2.8c4.98,0,9.04,4.05,9.04,9.04v8.1v0.47v1.88v0v9.71  c-5.28-3.79-8.32-9.84-8.52-13.91l-0.04-0.89l-5.97-1.76l0.14,2.93c0.28,5.83,4.31,14.38,12.46,19.4c0.59,0.37,1.25,0.72,1.93,1.06  v45.93v0v1.88v0.47V141.62L99.69,141.62z M136.57,128.09c-3.65,2.93-6.4,6.81-7.95,11.23l-1.58,4.49c-1.43,4.09-5.31,6.84-9.64,6.84  h-2.8c-4.98,0-9.04-4.05-9.04-9.04v-8.1v-0.47v-1.88v0v-9.71c5.28,3.79,8.32,9.84,8.52,13.91l0.04,0.89l5.97,1.76l-0.14-2.93  c-0.28-5.83-4.31-14.38-12.46-19.4c-0.59-0.37-1.25-0.72-1.93-1.06V68.68v0V66.8v-0.47v-8.1v0c0-4.98,4.05-9.04,9.04-9.04h2.8  c4.33,0,8.21,2.75,9.64,6.84l0.48,1.38c-7.89,2.99-13.24,9.28-14.98,14.28l-0.96,2.77l6.22,0l0.29-0.84  c1.3-3.73,5.67-8.48,11.51-10.73c1.62,3.43,3.98,6.47,6.96,8.86l4.75,3.82c0.12,0.1,0.23,0.21,0.35,0.32c-0.01,0-0.02,0-0.03,0  c-8.7,0-14.54,3.61-18.12,7.06c-6.9,6.63-9.02,15.85-8.06,21.6l0.48,2.9l5.46-2.98l-0.15-0.88c-0.72-4.31,1.26-11.52,6.33-16.4  c4.72-4.54,11.2-6.25,18.79-5.01c0.98,2.21,1.52,4.62,1.52,7.12c0,2.03-0.35,4.03-1.03,5.94c-1.09,3.03-1.09,6.36,0,9.39  c0.69,1.91,1.03,3.91,1.03,5.94c0,3.5-1.04,6.84-2.91,9.68c-4.87-1.41-7.11-5.03-8.14-7.98c-1.11-3.18-1.06-6.44-0.51-8.57l0,0  c0,0,0.02-0.07,0.06-0.2c0.05-0.16,0.1-0.32,0.15-0.47c0.31-0.94,0.95-2.67,1.78-3.8l-5.39-1.53c-3.04,3.33-3.74,10.42-1.63,16.49  c1.73,4.96,4.96,8.62,9.31,10.66L136.57,128.09z"
							style={{ fill: "#1FB2F7" }}
						></motion.path>
					</svg>
					<motion.svg
						initial={{}}
						y="266.155"
						viewBox="4.28000020980835 17.670000076293945 162.99000549316406 42.69000244140625"
						x="177"
						height="42.69000244140625"
						width="162.99000549316406"
						style={{ overflow: "visible" }}
					>
						<g fill="#ffffff" fillOpacity="1" style={{}}>
							<path
								d="M31.98 32.03Q31.98 35.05 30.55 37.73Q29.13 40.41 25.99 42.09Q22.86 43.78 17.96 43.78L17.96 43.78L10.77 43.78L10.77 59.85L4.28 59.85L4.28 20.23L17.96 20.23Q22.52 20.23 25.68 21.80Q28.84 23.37 30.41 26.05Q31.98 28.73 31.98 32.03L31.98 32.03ZM17.96 38.48Q21.66 38.48 23.48 36.79Q25.31 35.11 25.31 32.03L25.31 32.03Q25.31 25.54 17.96 25.54L17.96 25.54L10.77 25.54L10.77 38.48L17.96 38.48ZM36.19 17.67L42.69 17.67L42.69 59.85L36.19 59.85L36.19 17.67ZM78.02 43.38Q78.02 45.14 77.80 46.57L77.80 46.57L53.80 46.57Q54.08 50.33 56.59 52.61Q59.10 54.89 62.75 54.89L62.75 54.89Q67.99 54.89 70.16 50.50L70.16 50.50L77.17 50.50Q75.74 54.83 72.01 57.60Q68.28 60.36 62.75 60.36L62.75 60.36Q58.24 60.36 54.68 58.34Q51.12 56.32 49.10 52.64Q47.07 48.96 47.07 44.12L47.07 44.12Q47.07 39.27 49.04 35.60Q51.01 31.92 54.57 29.93Q58.13 27.93 62.75 27.93L62.75 27.93Q67.19 27.93 70.67 29.87Q74.15 31.81 76.09 35.31Q78.02 38.82 78.02 43.38L78.02 43.38ZM53.86 41.33L71.24 41.33Q71.18 37.73 68.67 35.57Q66.17 33.40 62.46 33.40L62.46 33.40Q59.10 33.40 56.70 35.54Q54.31 37.68 53.86 41.33L53.86 41.33ZM106.01 28.44L95.86 43.95L106.01 59.85L98.65 59.85L91.87 49.19L85.48 59.85L78.70 59.85L88.85 44.40L78.70 28.44L86.06 28.44L92.84 39.10L99.22 28.44L106.01 28.44ZM130.80 28.44L137.29 28.44L137.29 59.85L130.80 59.85L130.80 56.15Q129.26 58.08 126.78 59.19Q124.30 60.31 121.50 60.31L121.50 60.31Q117.80 60.31 114.86 58.77Q111.93 57.23 110.25 54.21Q108.56 51.19 108.56 46.91L108.56 46.91L108.56 28.44L115.01 28.44L115.01 45.94Q115.01 50.16 117.12 52.41Q119.22 54.66 122.87 54.66L122.87 54.66Q126.52 54.66 128.66 52.41Q130.80 50.16 130.80 45.94L130.80 45.94L130.80 28.44ZM155.24 60.36Q151.54 60.36 148.60 59.02Q145.67 57.68 143.96 55.38Q142.25 53.07 142.13 50.22L142.13 50.22L148.86 50.22Q149.03 52.21 150.77 53.55Q152.51 54.89 155.13 54.89L155.13 54.89Q157.87 54.89 159.38 53.84Q160.89 52.78 160.89 51.13L160.89 51.13Q160.89 49.36 159.20 48.51Q157.52 47.65 153.88 46.63L153.88 46.63Q150.34 45.66 148.12 44.75Q145.90 43.83 144.27 41.95Q142.65 40.07 142.65 36.99L142.65 36.99Q142.65 34.48 144.13 32.40Q145.61 30.32 148.37 29.13Q151.14 27.93 154.73 27.93L154.73 27.93Q160.09 27.93 163.37 30.64Q166.64 33.34 166.87 38.02L166.87 38.02L160.37 38.02Q160.20 35.91 158.66 34.66Q157.12 33.40 154.50 33.40L154.50 33.40Q151.94 33.40 150.57 34.37Q149.20 35.34 149.20 36.94L149.20 36.94Q149.20 38.19 150.11 39.05Q151.03 39.90 152.34 40.38Q153.65 40.87 156.21 41.61L156.21 41.61Q159.63 42.52 161.83 43.46Q164.02 44.40 165.62 46.23Q167.21 48.05 167.27 51.07L167.27 51.07Q167.27 53.75 165.79 55.86Q164.31 57.97 161.60 59.17Q158.89 60.36 155.24 60.36L155.24 60.36Z"
								transform="translate(0, 0)"
								pathLength={1}
							></path>
						</g>
					</motion.svg>
				</svg>
				<div className=" h-72 flex justify-center">
					Data Orchestration <mark> at it's Finest ✨</mark>. <i>Fully TypeSafe. Instantly Reactive.</i>
				</div>
				<div className={styles.buttons}>
					<Link className="button button--secondary button--lg" to="/docs">
						Docs (WIP)
					</Link>
				</div>
			</div>
		</header>
	)
}
const description = ""
export default function Home(): JSX.Element {
	const { siteConfig } = useDocusaurusContext()
	// Intuitive, type safe, light and flexible Store for any Frontend Application!
	return (
		<Layout title={`Home`} description="The Home">
			<Head>
				<meta name="twitter:card" content="summary_large_image" />
			</Head>
			<HomepageHeader />
			<main>
				<HomepageFeatures />
			</main>
		</Layout>
	)
}
