cursosBitcode.map((value) => {
    $('.cursos .container:nth-of-type(2)').append(`
    <div class="curso_single p-3 d-flex flex-wrap m-3">
        <div class="img_curso">
            ${value.img}
        </div>
        <div class="info_curso pt-3">
            <h1 class="fs-5 text-light">${value.nome}</h1>
            <p class="text-light lh-base pt-3">
                ${value.descricao}
            </p>
        </div>
        <div class="box_btn_curso d-flex justify-content-around align-items-center">
            <a href="${value.link}" class="text-center text-light">Ver curso</a>
        </div>
    </div>
    `)
})