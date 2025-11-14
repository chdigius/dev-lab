import not_basic

while True:
    text = input('not-basic > ')
    result, error = not_basic.run('<stdin>', text)

    if error:
        print(error.as_string())
    else:
        print(result)