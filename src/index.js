function createElement(tagName = "", attributes = {}, children = []) {
    return {
        tagName,
        attributes,
        children,
    }
}

const app = createElement("div", {}, "Hello Vdom KW!!!")
console.log(app)
