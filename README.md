# Accessible States

JS for quickly making any radio and checkbox states accessible

## Interactive Demo

Checkout the interactive demo here.

## Getting Started

### Step 1 - Create a radio group container

A radio group container will contain the individual radio buttons. The group contain is simply a div that has its `role` attribute set
to `radiogroup`.

```html
<div class="a11y-radio-group" role="radiogroup">
  [RADIO BUTTONS GO HERE]
</div>
```

### Step 2 - Add a label to the radio group

Now with your radio group configured we need to add a label to describe the radio group to make it accessible to screen readers. This label is placed
as the first element in the group and hidden using the `a11y-hidden` class (any class that hides the element will work) and given a unique ID. Now just simply 
use the ID to set the `aria-labelledby` attribute to `[YOUR ID VALUE]`.

```html
<div class="a11y-radio-group" role="radiogroup" aria-labelledby="radio-group-title">
  <span id="radio-group-title" class="a11y-hidden">Radio Group 1</span>
</div>
```

### Step 3 - Create a radio button inside your group

Create your desired number of radio buttons using the example markup below and place them inside the root of the radio group container. It is critical
that each of the radio divs have the attribute `role="radio"`. 

If you want to set a default value ensure that the `aria-checked` attribute is set to true and the other radios are set to false.

```html
<div role="radio" aria-checked="true">
    <span>Radio option 1</span>
</div>
<div role="radio" aria-checked="false">
    <span>Radio option 1</span>
</div>
<div role="radio" aria-checked="false">
    <span>Radio option 1</span>
</div>
```

### Example Code

Here is the full snippet generated from following the steps above.

```html
<div class="a11y-radio-group" role="radiogroup" aria-labelledby="radio-group-title">
    <span id="radio-group-title" class="a11y-hidden">Radio Group 1</span>
    <div role="radio" aria-checked="true">
        <span>Radio option 1</span>
    </div>
    <div role="radio" aria-checked="false">
        <span>Radio option 1</span>
    </div>
    <div role="radio" aria-checked="false">
        <span>Radio option 1</span>
    </div>
</div>
```
