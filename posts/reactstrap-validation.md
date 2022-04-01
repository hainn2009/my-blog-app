---
title: Reactstrap Validation
excerpt: Reactstrap has some good components and classes to support validate form. We should try to use these to make our website become better.
image: reactstrap-validation.png
isFeatured: true
date: "2022-03-31"
---

## Client Validation

What is it ?
![Example of Client Validation](what-is-form-validation.png)

## What components we need

In the Input component, set the attributes valid and invalid.
In the FormFeedback component, set the message will be displayed when input are valid or invalid.

## Put it in practice

```js
import { Button, FormGroup, Label, Input, Form, FormFeedback } from 'reactstrap';
...
<FormGroup>
  <Label for="youremail">Email:</Label>
  <Input
    type="text"
    placeholder="Enter a valid email"
    name="email"
    id="youremail"
    onChange={handleEmailChange}
    autoFocus
    value={email}
    invalid={!isValid()}
    valid={isValid()}
    disabled={isLoading}
  />
  <FormFeedback invalid>{feedback.error && feedback.message}</FormFeedback>
  <FormFeedback valid>{!feedback.error && feedback.message}</FormFeedback>
</FormGroup>
```

And this is the result:
Valid form
![valid form](valid-form.png)
Invalid form
![invalid form](invalid-form.png)

## Conclusion

Let's implement these components in our website!
