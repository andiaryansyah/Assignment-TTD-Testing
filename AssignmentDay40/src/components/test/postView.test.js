import { render, screen, act } from "@testing-library/react";
import '@testing-library/jest-dom';
import axios from 'axios';
import userEvent from "@testing-library/user-event";
import PostView from "../PostSection/view";
import App from "../../App";

jest.mock('axios');

test("renders View", () => {
  render(<PostView />);

  expect(screen.queryByPlaceholderText("Title")).not.toBe(null);
  const textElement = screen.getByPlaceholderText("Description");
  expect(textElement).toBeInTheDocument();
});

test("renders App", () => {
  render(<App />);
  const linkElement = screen.getByText("React Axios example - netlify");
  expect(linkElement).toBeInTheDocument();
});

test("renders title ", async () => {
  const titleText = "Ary";
  const result1Text = "Title: Ary";
  render(<PostView />);
  
  const titleInput = screen.getByTestId("title-input");
  userEvent.type(titleInput, titleText);

  const inputTitle= await screen.findByText(result1Text);
  expect(inputTitle).toBeInTheDocument();
  
});

test("renders Description ", async () => {
  const descText = "Web Developer";
  const result2Text = "Description: Web Developer";
  render(<PostView />);
  
  const descInput = screen.getByTestId("desc-input");
  userEvent.type(descInput, descText);

  const inputDesc = await screen.findByText(result2Text);
  expect(inputDesc).toBeInTheDocument();
  
});



