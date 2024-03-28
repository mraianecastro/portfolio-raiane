const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
        const offsetTop = section.offsetTop;
        const scrollOptions = {
            top: offsetTop,
            behavior: 'smooth'
        }

        // @ts-ignore 
        window.scrollTo(scrollOptions)
    } else {
        console.error('Seção com ID ${id} não encontrada.')
    }
}


export default scrollToSection;