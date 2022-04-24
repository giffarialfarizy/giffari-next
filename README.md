# Giffari Alfarizy's Personal Website

## Catatan Development

### [7. Using Math](https://youtu.be/sXE3nwjCY_w)

@use 'sass:math';

border-radius: math.div($border-radius-base, 4);

@debug "hello ninjas";
@debug math.div(10/3);

### [8. Maps](https://youtu.be/La8wN7o-cL8)

map-get($colors, "purple");
map-has-key($colors, "secondary");
map-remove($colors, "primary");
map-merge($colors, ("pink": #ffc0cb));

Color Palette

```css
$colors: (
	'text': $text,
	'primary': $primary,
	'secondary': $secondary,
	'muted': $muted,
	'light': $light,
	'action': $action,
	'action-darker': $action-darker,
	'error': $error,
	'success': $success,
	'white': white,
	'black': black
);
```

### [9. Loops](https://youtu.be/I1lp8eSKmEs)

@each
@for

```css
@each $key, $val in $colors {
	.bg-#{$key} {
		background-color: $val;
	}
	.text-#{$key} {
		color: $val;
	}

	@for $i from 1 through 9 {
		.bg-#{$key}-light-#{$i} {
			background-color: mix(white, $val, $i * 10);
		}
	}
}
```

### [10. Conditionals (@if)](https://youtu.be/QPZOvED3N_8)

```css
@if ($val != black and $val !=white) {
	/* Light variations */
	@for $i from 1 through 9 {
		.bg-#{$key}-light-#{$i} {
			background-color: mix(white, $val, $i * 10);
		}
	}
}
```

## Edit Project

### Clone

```bash
git clone https://github.com/giffarialfarizy/personal-website.git
```

### Install dependencies

```bash
yarn
```

### Start development mode

```bash
yarn dev
```
