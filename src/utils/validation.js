import toast from "react-hot-toast";


export function validate (input, fields) {
    const errors = []
    if (fields.includes("string")) {
        if (!/[a-zа-яё]/i.test(input)) {
            errors.push(toast.error('Поле должно быть символьным!'))
        }
    }

    if (fields.includes("number")) {
        if (isNaN(input)) {
            errors.push(toast.error('Поле должно быть числовым!'))
        }
    }

    if (fields.includes("phone")) {
        if (!/^[\+7\(\d\d\d\)\s\d\d\d\s\d\d\s\d\d]{17}$/i.test(input)) {
            errors.push(toast.error('Номер телефона некорректен!'))
        }
    }

    return errors
}