import React from "react";
import theme from "theme";
import { Theme, Link, Image, Text, Section, Input } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { Override, Stack, StackItem, Formspree } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index"} />
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Section
			padding="100px 0 150px 0"
			sm-padding="40px 0"
			min-height="600px"
			sm-min-height="auto"
			background="--color-dark"
			display="flex"
			flex-direction="column"
			height="100%"
			margin="0 0 -2px 0"
		>
			<Stack
				color="--grey"
				font="--base"
				margin="30px -16px -16px -16px"
				align-self="center"
				justify-content="center"
				flex-direction="column"
				align-items="center"
				align-content="center"
			>
				<Image height="100px" src="https://uploads.quarkly.io/60a47ba413e4b0001f82a146/images/logo.png?v=2021-05-19T02:50:27.696Z" width="200px" />
				<Text
					as="h1"
					margin="40px 0px 20px 0px"
					font="normal 800 72px/1.2 --fontFamily-googleRaleway"
					md-font="--headline2"
					color="--light"
					max-width="850px"
				>
					Meet Luna.
				</Text>
				<Components.QuarklycommunityKitLoopText
					slides="portfolio tracker,news source,research hub,market analyst"
					color="#ffffff"
					font="900 42px/50.4px --fontFamily-serifGaramond"
					intervalProp="3000"
					margin="20px auto 0px auto"
					sm-text-align="center"
					text-align="center"
					align-self="center"
					display="grid"
					justify-content="center"
					align-items="center"
					align-content="center"
				>
					<Override slot="Before Text" font="normal 400 42px/1.2 --fontFamily-googleMontserrat">
						Your financial
					</Override>
					<Override slot="Looped Text" color="#6cff6c" font="600 42px/50.4px --fontFamily-googleMontserrat" />
					<Override slot="After Text" opacity="0" />
				</Components.QuarklycommunityKitLoopText>
			</Stack>
			<Stack
				margin-top="auto"
				color="--grey"
				font="--base"
				margin="90px -16px -16px -16px"
				align-self="center"
				justify-content="center"
				flex-direction="column"
				sm-margin="90px 10px -16px 10px"
			>
				<Image
					width="100%"
					src="https://uploads.quarkly.io/60a47ba413e4b0001f82a146/images/HeroWindow-3x.png?v=2021-05-19T02:47:22.342Z"
					align-self="flex-start"
					sm-width="100%"
					max-width="900px"
					margin="20px 0px 0px 0px"
				/>
			</Stack>
		</Section>
		<Image
			width="100%"
			height="140px"
			src="https://uploads.quarkly.io/60a47ba413e4b0001f82a146/images/faded-dots-white-2.png?v=2021-05-19T04:34:40.216Z"
			background="--color-dark"
			margin="0px 0px 0 0px"
			padding="20px 0px 40px 0px"
		/>
		<Section background="#1b2129" color="--dark" padding="64px 0 64px 0" margin="-8px 0 0 0">
			<Stack>
				<StackItem width="50%" lg-width="100%">
					<Override slot="StackItemContent" flex-direction="column" />
					<Text
						font="--base"
						color="--grey"
						letter-spacing="1px"
						text-transform="uppercase"
						margin="0"
					>
						Get Access
					</Text>
					<Text
						font="normal 900 36px/1.2 --fontFamily-googleRaleway"
						max-width="500px"
						margin="10px 0 0 0"
						border-color="#ffffff"
						color="#ffffff"
					>
						Sign Up for Early Access
					</Text>
				</StackItem>
				<StackItem width="50%" lg-width="100%">
					<Formspree endpoint="https://formspree.io/f/mbjqgqon" color="#ffffff" completeText="Welcome to Luna!">
						<Stack gap="16px">
							<StackItem width="50%" border-color="rgba(255, 255, 255, 0.46)">
								<Override slot="StackItemContent" flex-direction="column" />
								<Text font="normal 600 16px/1.5 --fontFamily-sans" margin="0 0 8px 4px" border-color="rgba(255, 255, 255, 0.46)" color="rgba(255, 255, 255, 0.67)">
									Name
								</Text>
								<Input
									max-width="400px"
									width="100%"
									name="name"
									background="rgba(255, 255, 255, 0)"
									border-color="rgba(255, 255, 255, 0.25)"
									border-radius="10px"
									placeholder="Stonkjeet Singh"
									sm-color="#ffffff"
								/>
							</StackItem>
							<StackItem width="50%">
								<Override slot="StackItemContent" flex-direction="column" />
								<Text font="normal 600 16px/1.5 --fontFamily-sans" margin="0 0 8px 4px" border-color="rgba(255, 255, 255, 0.46)" color="rgba(255, 255, 255, 0.67)">
									Email
								</Text>
								<Input
									max-width="400px"
									width="100%"
									type="email"
									name="email"
									border-color="rgba(255, 255, 255, 0.25)"
									background="rgba(255, 255, 255, 0)"
									border-width="2px"
									border-radius="10px"
									placeholder="stonkjeet@gmail.com"
									sm-color="#ffffff"
								/>
							</StackItem>
							<StackItem width="100%" hidden="true">
								<Override slot="StackItemContent" flex-direction="column" />
								<Text font="--base" margin="0 0 4px 0">
									Message
								</Text>
								<Input as="textarea" rows="4" width="100%" name="message" />
							</StackItem>
							<StackItem width="100%" />
						</Stack>
					</Formspree>
					<Input
						type="submit"
						height="40px"
						margin="10px 0px 2px 30px"
						align-self="center"
						background="#11b557"
						border-width={0}
						color="#ffffff"
						text-align="center"
						border-radius="10px"
						padding="6px 24px 6px 24px"
						font="normal 600 12px/1.5 --fontFamily-googleMontserrat"
						hover-background="#2c6565"
						cursor="pointer"
					/>
				</StackItem>
			</Stack>
		</Section>
		<Link
			font={"--capture"}
			font-size={"10px"}
			position={"fixed"}
			bottom={"12px"}
			right={"12px"}
			z-index={"4"}
			border-radius={"4px"}
			padding={"5px 12px 4px"}
			background-color={"--dark"}
			opacity={"0.6"}
			hover-opacity={"1"}
			color={"--light"}
			cursor={"pointer"}
			transition={"--opacityOut"}
			quarkly-title={"Badge"}
			text-decoration-line={"initial"}
			href={"https://quarkly.io/"}
			target={"_blank"}
		>
			Made on Quarkly
		</Link>
	</Theme>;
});