# Changelog

## v1.4.0 - 2024-08-09

### Changes

- Added the `html` function, which creates a document fragment from an HTML string  
This function is useful when adding children to an element created with the `element` function

### Other

- Readme adjustments

## v1.3.0 - 2024-08-03

### Changes

- Added possible attributes types for a better developer experience
- Enabled boolean attributes to be set
- Class attribute should be set with the property `className` now, though using `class` is still supported

## v1.2.1 - 2024-08-01

### Changes

- Minor change in element function

## v1.2.0 - 2024-07-31

### Changes

- Made several adjustments that significantly improve the performance of the `element` function

#### Benchmark

Version      | ops/sec | Average Time (ns)   | Margin   | Samples |
-------------|---------|---------------------|----------|---------|
v1.1.2       | 15.826  | 63186.52661506903   | ±0.98%   | 6331    |
v1.2.0       | 56.685  | 17641.049614111675  | ±0.43%   | 22675   | 

### Other

- Readme minor change
