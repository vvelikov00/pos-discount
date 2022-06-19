import { stringToColor } from "./stringColor";

export function stringAvatar(name) {
  return {
		sx: {
			bgcolor: stringToColor(name),
		},
		children: `${name.split(' ')[0][0]}`,
	};
}