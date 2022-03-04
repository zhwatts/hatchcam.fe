/** @format */

import React, { useState } from "react";
import PropTypes from "prop-types";
import {
	CssBaseline,
	AppBar,
	Toolbar,
	createTheme,
	Grid,
	ThemeProvider,
	Box,
	Drawer,
	List,
	ListItem,
	ListItemIcon,
	Divider,
	ListItemText,
	ImageList,
	ImageListItem,
	Typography,
} from "@mui/material";

import {
	PlayCircleOutlineOutlined as Play,
	FastForward,
	FastRewind,
} from "@mui/icons-material";

// import "./App.css";
// import useStyles from "./workspaceStyles.css";

import logo from "./hatchcam_logo.svg";

// import { Header, Footer, Modal, RightFlyout } from "components";
// import GlobalStyle from "./GlobalStyle";

const themeLight = createTheme({
	palette: {
		background: {
			default: "#e4f0e2",
		},
	},
});

const themeDark = createTheme({
	typography: {
		subtitle1: {
			color: "#9B8E81",
			fontSize: "11px",
			textTransform: "uppercase",
		},
	},
	palette: {
		background: {
			default: "#0E191A",
		},
		sidebar: {
			default: "#222222",
			main: "#222222",
		},
		playbackOptions: {
			background: "#343E48",
		},
		header: {
			background: "#F9EA5B",
		},
		text: {
			primary: "#ffffff",
		},
		border: {
			default: "#EF8728",
			common: "#EF8728",
			main: "#EF8728",
			primary: "#EF8728",
		},
	},
});

const sidebarWidth = 300;
const drawerWidth = 300;

const Workspace = () => {
	return (
		<Box
			component="div"
			sx={{
				display: "grid",
				gridTemplateRows: "0fr 2fr",
				height: "100%",
			}}
		>
			<Box
				component="div"
				sx={{
					backgroundColor: "header.background",
					padding: "10px 0",
					borderBottom: 1,
					borderColor: "border.common",
				}}
			>
				<Grid container xs={12}>
					<Grid
						item
						sx={{
							display: "flex",
							width: sidebarWidth,
							justifyContent: "space-around",
						}}
					>
						<img
							alt="Hatch Cam"
							src={logo}
							style={{ height: "55px" }}
						/>
					</Grid>
				</Grid>
			</Box>

			<Box
				component="div"
				sx={{
					overflow: "hidden",
					display: "grid",
					gridTemplateColumns: `${sidebarWidth}px 2fr`,
				}}
			>
				{/* SIDEBAR */}
				<Box
					sx={{
						backgroundColor: "sidebar.main",
						borderRight: 1,
						borderColor: "border.common",
						overflowY: "auto",
					}}
				>
					<Box
						sx={{
							backgroundColor: "playbackOptions.background",
							borderBottom: "1px dashed",
							borderColor: "border.common",
							p: 2,
						}}
					>
						<Typography variant="subtitle1">
							Playback Options
						</Typography>
					</Box>
					<Box sx={{ p: 2 }}>
						<Typography variant="subtitle1">Bookmarks</Typography>
						<ImageList
							gap={8}
							sx={{ width: "100%" }}
							cols={2}
							rowHeight={95}
						>
							<ImageListItem key={"./thm.png"}>
								<img
									style={{
										height: "100%",
										width: "100%",
										borderRadius: 1,
										border: "4px solid #EF8728",
									}}
									src="./thm.png"
									alt="thm"
									loading="lazy"
								/>
							</ImageListItem>
							{itemData.map((item) => (
								<ImageListItem key={item.img}>
									<img
										style={{
											height: "100%",
											width: "100%",
											borderRadius: 1,
										}}
										src={item.url}
										alt={item.title}
										loading="lazy"
									/>
								</ImageListItem>
							))}
						</ImageList>
					</Box>
				</Box>
				{/* CONTENT */}
				<Box
					flexGrow={2}
					sx={{ overflowY: "auto", padding: " 20px 80px" }}
				>
					<Box
						sx={{
							width: "100%",
							backgroundColor: "sidebar.main",
							borderRadius: 1,
							border: 1,
							borderColor: "border.common",
						}}
					>
						<Box
							sx={{
								display: "flex",
								justifyContent: "space-around",
							}}
						>
							<img
								src="./thm.png"
								alt="Focused Frame"
								style={{ height: 450 }}
							/>
						</Box>
						<Box
							sx={{
								p: 1,
								borderTop: 1,
								borderColor: "border.common",
							}}
						>
							<Grid
								container
								sx={{
									width: "100%",
									height: "55px",
									justifyContent: "space-between",
								}}
							>
								{new Array(13).fill(0).map((item) => (
									<Grid
										item
										style={{
											height: "100%",
										}}
									>
										<img
											src="./thm.png"
											alt="thum"
											style={{
												width: "100%",
												height: "100%",
											}}
										/>
									</Grid>
								))}
							</Grid>
							<Grid
								container
								sx={{
									justifyContent: "space-between",
									overflow: "hidden",
								}}
							>
								{[
									"00:00",
									"01:59",
									"05:59",
									"11:59",
									"17:59",
									"23:59",
								].map((item) => (
									<Grid item sx={{ fontSize: "10px" }}>
										{item}
									</Grid>
								))}
							</Grid>
						</Box>
					</Box>

					<Grid
						container
						sx={{ justifyContent: "space-around", paddingTop: 2 }}
					>
						<Grid item>
							<Grid container>
								<Grid item>
									<Grid
										container
										direction="column"
										sx={{
											justifyContent: "space-around",
											background: "#EF8728",
											height: "100%",
											borderRadius: "100px 0 0 100px",
											paddingLeft: "90px",
										}}
									>
										<Grid item>
											<FastRewind
												sx={{
													color: "#F9EA5B",
													fontSize: "45px",
												}}
											/>
										</Grid>
									</Grid>
								</Grid>
								<Grid item sx={{ background: "#EF8728" }}>
									<Play
										sx={{
											color: "#F9EA5B",
											fontSize: "70px",
										}}
									/>
								</Grid>
								<Grid item>
									<Grid
										container
										direction="column"
										sx={{
											justifyContent: "space-around",
											background: "#EF8728",
											height: "100%",
											borderRadius: "0 100px 100px 0",
											paddingRight: "90px",
										}}
									>
										<Grid item>
											<FastForward
												sx={{
													color: "#F9EA5B",
													fontSize: "45px",
												}}
											/>
										</Grid>
									</Grid>
								</Grid>
							</Grid>
							<Grid
								item
								style={{
									textAlign: "center",
									fontSize: "20px",
								}}
							>
								02:35:47
							</Grid>
						</Grid>
					</Grid>
				</Box>
			</Box>
		</Box>
	);
};

const itemData = [
	{
		url: "./thm.png",
		title: "thumb",
	},
	{
		url: "./thm.png",
		title: "thumb",
	},
	{
		url: "./thm.png",
		title: "thumb",
	},
	{
		url: "./thm.png",
		title: "thumb",
	},
	{
		url: "./thm.png",
		title: "thumb",
	},
	{
		url: "./thm.png",
		title: "thumb",
	},
	{
		url: "./thm.png",
		title: "thumb",
	},
	{
		url: "./thm.png",
		title: "thumb",
	},
	{
		url: "./thm.png",
		title: "thumb",
	},
	{
		url: "./thm.png",
		title: "thumb",
	},
	{
		url: "./thm.png",
		title: "thumb",
	},
	{
		url: "./thm.png",
		title: "thumb",
	},
];

const Header1 = () => (
	<AppBar
		sx={{
			backgroundColor: "#F9EA5B",
			zIndex: (theme) => theme.zIndex.drawer + 1,
			borderBottom: 30,
			borderColor: "border",
			boxSizing: "border-box",
		}}
		elevation={0}
		edge="start"
		aria-label="menu"
		// position="fixed"
	>
		<Toolbar disableGutters>
			<Grid container>
				<Grid
					container
					item
					sx={{ width: drawerWidth }}
					justifyContent="space-around"
				>
					<Grid item>
						<img
							alt="Hatch Cam"
							src={logo}
							style={{ height: "55px" }}
						/>
					</Grid>
				</Grid>
			</Grid>
		</Toolbar>
	</AppBar>
);

const Workspace1 = ({ children }) => {
	return (
		<Box sx={{ display: "flex", boxSizing: "border-box" }}>
			<Header1 />

			<Drawer
				variant="permanent"
				sx={{
					width: drawerWidth,
					flexShrink: 0,
					[`& .MuiDrawer-paper`]: {
						backgroundColor: "sidebar.main", // backgroundColor is a "theme aware" prop, but "background" is not
						width: drawerWidth,
						boxSizing: "border-box",
					},
				}}
			>
				<Toolbar />
				<Box sx={{ overflow: "auto" }}>
					<Box
						sx={{
							backgroundColor: "playbackOptions.background",
							p: 2,
						}}
					>
						<Typography variant="subtitle1">
							Playback Options
						</Typography>
					</Box>
				</Box>
			</Drawer>
			<Box component="main" sx={{ flexGrow: 1, p: 3 }}>
				<Toolbar />
				<Typography paragraph>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
					do eiusmod tempor incididunt ut labore et dolore magna
					aliqua. Rhoncus dolor purus non enim praesent elementum
					facilisis leo vel. Risus at ultrices mi tempus imperdiet.
					Semper risus in hendrerit gravida rutrum quisque non tellus.
					Convallis convallis tellus id interdum velit laoreet id
					donec ultrices. Odio morbi quis commodo odio aenean sed
					adipiscing. Amet nisl suscipit adipiscing bibendum est
					ultricies integer quis. Cursus euismod quis viverra nibh
					cras. Metus vulputate eu scelerisque felis imperdiet proin
					fermentum leo. Mauris commodo quis imperdiet massa
					tincidunt. Cras tincidunt lobortis feugiat vivamus at augue.
					At augue eget arcu dictum varius duis at consectetur lorem.
					Velit sed ullamcorper morbi tincidunt. Lorem donec massa
					sapien faucibus et molestie ac.
				</Typography>
			</Box>
		</Box>
	);
};

function App() {
	const [lightThemeActive, setLightThemeActive] = useState(false);

	return (
		<ThemeProvider theme={lightThemeActive ? themeLight : themeDark}>
			<CssBaseline />
			<Workspace />
			{/* <Workspace1 /> */}
		</ThemeProvider>
	);
}

// Workspace.propTypes = { children: PropTypes.node };
// Workspace.defaultProps = { children: null };

export default App;
