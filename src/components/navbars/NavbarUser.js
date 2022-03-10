import React, { useState, useContext, useEffect } from "react";
import { UserContext } from "../../context/userContext";
import { Navbar, Container, Stack, Nav, Dropdown } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import logoBlack from "../../assets/img/logoBlack.png";
import avatarDummy from "../../assets/img/null.png";
export const path = "http://localhost:4000/uploads/"
function NavbarUser() {
	const navigate = useNavigate()
	const [state, dispatch] = useContext(UserContext)
	console.log(state.user);

	const [avatar, setAvatar] = useState(null);
	// console.log(avatar);

	const id = state.user.id

	const handleLogOut = () => {
		dispatch({
			type: "LOGOUT"
		})
		navigate("/")
	}
	
	useEffect(() => {
		console.log(state.user.image);
		
		setAvatar(state.user.image)
	})


	return (
		<Navbar bg="light" sticky="top" className=" shadow">
			<Container className="justify-content-between align-items-center">
				<Navbar.Brand >
					<Link to="/">
						<img src={logoBlack} alt="logo" width="130" height="46" />

					</Link>
				</Navbar.Brand>
				<Nav>
					<Stack>
						<Dropdown align="end">
							<Dropdown.Toggle as={Nav.Link} className="Dropdown-Toggle">
								<img
									src={avatar === null ? avatarDummy : path + avatar}
									alt="avatar"
									className="rounded-circle border border-3 border-primary "
									style={{
										width: "3rem",
										height: "3rem",
										objectFit: "cover",
									}}
								/>
							</Dropdown.Toggle>
							<Dropdown.Menu className="text-dark shadow">
								<Dropdown.Item className="py-3" onClick={() => navigate(`/profile/${id}`)}>
									
										<span>
											<img
												src="../assets/user2.svg"
												alt="user-profile"
												width={30}
												height={30}
												className="me-3"
											/>
										</span>
										<span className="fw-bold">Profile</span>
									
								</Dropdown.Item>

									<Dropdown.Item className="py-3" onClick={() => navigate("/new-journey")}>
										<span>
											<img
												src="../assets/write1.svg"
												alt="write1"
												width={30}
												height={30}
												className="me-3"
											/>
										</span>
										<span className="fw-bold">New Journey</span>
									</Dropdown.Item>
								
								<Dropdown.Item className="py-3" onClick={() => navigate("/bookmark")}>

										<span>
											<img
												src="../assets/bookmark.svg"
												alt="bookmark"
												width={30}
												height={30}
												className="me-3"
											/>
										</span>
										<span className="fw-bold">Bookmark</span>
									
								</Dropdown.Item>
								<Dropdown.Divider />
								<Dropdown.Item onClick={handleLogOut}>
									<span>
										<img
											src="../assets/logout.svg"
											alt="logout"
											width={30}
											height={30}
											className="me-3"
										/>
									</span>
									<span className="fw-bold">Log Out</span>
								</Dropdown.Item>
							</Dropdown.Menu>
						</Dropdown>
					</Stack>
				</Nav>
			</Container>
		</Navbar>
	);
}

export default NavbarUser;
