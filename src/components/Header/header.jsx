import React, { useState } from 'react'; // Import useState from react
import smlogo from "../../smlogo.png"; // Import smlogo image file
import { AppBar, Toolbar, Box, Typography, styled } from '@mui/material';
import CustomButtons from './CustomButtons';
import SearchIcon from '@mui/icons-material/Search';

// Define StyledHeader, Component, Subheading, and CustomButtonwrapper using styled from @mui/material

const StyledHeader = styled(AppBar)`
  background: #2874f0;
  height: 55px;
`;

const Component = styled(Box)`
  margin-left: 6%;
  margin-bottom: 1%;
  img-size: 5px;
  line-height: 2%;
  margin-top: 1%;
  margin-right: 2%;
`;

const Subheading = styled(Typography)`
  font-size: 12px;
  font-weight: 600;
`;

const CustomButtonwrapper = styled(Box)`
  margin: 0 5% 0 auto;
`;

function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <StyledHeader>
            <Toolbar style={{ minHeight: 55 }}>
                <Component>
                    <a href="/">
                        <img src={smlogo} alt="digital dalal street" style={{ width: 35, height: 35 }} />
                    </a>
                    <Box>
                        <Subheading> Digital Dalal Street</Subheading>
                    </Box>
                </Component>
                <div className="relative flex items-center mx-4">
                    {/* Search bar with magnifying glass icon */}
                    <input
                        type="text"
                        placeholder="Search..."
                        style={{ width: '500px' }} // Adjust the width value as needed
                        className="border border-gray-300 rounded-md px-8 py-2 mr-10 focus:outline-none focus:border-blue-500"
                    />


                    <SearchIcon style={{ cursor: 'pointer', marginLeft: '-80px', zIndex: '1', position: 'relative', color: "blue" }} />
                    {/* Dropdown button */}
                    <button
                        id="CategoriesButton"
                        onClick={toggleDropdown}
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center ml-10"
                        type="button"
                    >
                        Categories
                        <svg
                            className="w-2.5 h-2.5 ms-3"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 10 6"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="m1 1 4 4 4-4"
                            />
                        </svg>
                    </button>
                </div>
                {/* Dropdown menu */}
                <div
                    id="categories"
                    className={`${isOpen ? 'block' : 'hidden'
                        } z-10 absolute left-[40rem] top-full bg-white divide-y divide-gray-100 rounded-lg shadow w-44`}
                >
                    <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="CategoriesButton">
                        <div className="py-2">
                            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 ">
                                Men Fashion
                            </a>
                        </div>
                        <div className="py-2">
                            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                Women Fashion
                            </a>
                        </div>
                        <div className="py-2">
                            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 ">
                                Stationery
                            </a>
                        </div>
                        <div className="py-2">
                            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                Accessories
                            </a>
                        </div>
                        <div className="py-2">
                            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                Books
                            </a>
                        </div>
                        <div className="py-2">
                            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                Electronics
                            </a>
                        </div>
                    </ul>
                </div>
                <CustomButtonwrapper>
                    <CustomButtons />
                </CustomButtonwrapper>
            </Toolbar>
        </StyledHeader>
    );
}

export default Header;
