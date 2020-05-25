export const template = `
{imports}

{component}

{exports}

`;

export const functionalComponent = `

function {name}({props}) {
 {hooks}
 
 return {returns};
}

`;

export const classComponent = `

class {name} extends React.{type} {
    
    {lifecycle}

    render() {
        return {returns};
    }
}

`;