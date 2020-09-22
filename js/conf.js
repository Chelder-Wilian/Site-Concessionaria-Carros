var bt = 0;
function mostrarMenu() {
	if (bt%2 == 0) {
		document.getElementById('menu-mobile').style.display = 'block';
	}

	if (bt%2 == 1) {
		document.getElementById('menu-mobile').style.display = 'none';
	}

	bt++;
}

function mudarFoto(f){
	var miniWraper = document.getElementsByClassName('mini-img-wraper');
	var imagemDestaque = document.getElementById('foto-destaque');
	var trocar = document.getElementsByClassName('mini-img')[f.id].style.backgroundImage;
	for (var i = 0; i <= 5; i++) {
		miniWraper[i].style.backgroundColor='white';
	}
	miniWraper[f.id].style.backgroundColor='gray';
	imagemDestaque.style.backgroundImage=trocar;
};


$(function() {
	abrir();
	fechar();

	function abrir(){

		$('.mostrarDetalhes').click(function(e){
			var x = ($(this).attr('value'));
			var h2Preco = $('.preco').eq(x).html();
			var h2nome = $('.h2nome').eq(x).html();
			var h4um = $('.h4um').eq(x).html();
			var h4dois = $('.h4dois').eq(x).html();
			var h4tres = $('.h4tres').eq(x).html();
			var h4quatro = $('.h4quatro').eq(x).html();
			var h4cinco = $('.h4cinco').eq(x).html();
			var h4seis = $('.h4seis').eq(x).html();
			var allImg = [[`volkswagen1969.jpg`,`semfoto.png`],[`impala67.jpg`,`semfoto.png`],[`ferrari.jpg`,`semfoto.png`]];
			$('.bg').fadeIn();
			$('#veiculo-single').html(`
				<div class="info-veiculo">
					<div class="info-bread"><a href="index.html">HOME</a><span> > </span>
						<a href="htmls/venda.html">ESTOQUE</a><span> > </span>
						<a onclick="test()">VEÍCULO</p></div>
					<div style="background-image: url('imagens/`+allImg[x][0] +`')" id="foto-destaque"></div>
					<div class="nav-galeria-parent">
						<a href='#fist'><div class="arrow-left-nav"></div></a>
						<a href='#last'><div class="arrow-right-nav"></div></a>
						<div class="nav-galeria">
							<div class="nav-galeria-wraper">
								<div style="background-color: gray;" class="mini-img-wraper" id='fist'> <div onclick="mudarFoto(this)" id="0" style="background-image: url('imagens/`+ allImg[x][0] +`')" class="mini-img"></div></div>
								<div class="mini-img-wraper"> <div onclick="mudarFoto(this)" id="1" style="background-image: url('imagens/`+ allImg[x][1] +`')" class="mini-img"></div></div>
								<div class="mini-img-wraper"> <div onclick="mudarFoto(this)" id="2" style="background-image: url('imagens/`+ allImg[x][1] +`')" class="mini-img"></div></div>
								<div class="mini-img-wraper"> <div onclick="mudarFoto(this)" id="3" style="background-image: url('imagens/`+ allImg[x][1] +`')" class="mini-img"></div></div>
								<div class="mini-img-wraper"> <div onclick="mudarFoto(this)" id="4" style="background-image: url('imagens/`+ allImg[x][1] +`')" class="mini-img"></div></div>
								<div class="mini-img-wraper" id='last'> <div onclick="mudarFoto(this)" id="5" style="background-image: url('imagens/`+ allImg[x][1] +`')" class="mini-img"></div></div>
							</div><!--nav-wraper-->
						</div><!--nav-galeria-->
					</div><!--nav-galeria-parent-->
				</div><!--info-veiculo-->

				<div class="descricao-veiculo">
					<h2>`+ h2Preco +`</h2>
					<div class="det">
						<h2>`+ h2nome +`</h2>
						<h4>`+ h4um +`</h4>
						<h4>`+ h4dois +`</h4>
						<h4>`+ h4tres +`</h4>
						<h4>`+ h4quatro +`</h4>
						<h4>`+ h4cinco +`</h4>
						<h4>`+ h4seis +`</h4>
					</div>
					<a class="btn1" href="htmls/contato.html">Entre em Contato</a>
				</div><!--descricao-veiculo-->
				<div class="clear"></div>`);
		});
	};


	$('.img-single').click(function(){
		var imgX = ($(this).attr('target'));
		var imgY = document.getElementsByClassName('img-single')[imgX].style.backgroundImage;
		$('.bg').fadeIn();
		slides(imgY);
	})

	function slides(w){
		$('.photo-single').css('backgroundImage',w);
	}

	function fechar(){
		var el= $('.bg,.close');
		el.click(function(){
			$('.bg').fadeOut();
		});

		$('.venda-single','.img-single').click(function(e){
			e.stopPropagation();
		});
	};
});