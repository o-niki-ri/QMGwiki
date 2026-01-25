# Fitting Functions

## Fitting a Function to Data

To plot a power saturation curve, you can use the `fitting_functions.power_saturation()` function.

This is a hyperbolic function modeling the saturation of SPE emission under increasing excitation laser power. The function has the form:

$$
I(P) = \frac{I_{inf} \cdot P}{P + P_{sat}}
$$

where $I_{inf}$ is the asymptotic emission intensity, and $P_{sat}$ is the power at which $I(P) = \frac{1}{2} I_{inf}$.

### Example Usage

```python
from fitting_functions import power_saturation

intensities = power_saturation(powers, p0=[I_inf, P_sat])
# Returns: [0.1, 1.4, ..., 5.7]
```
