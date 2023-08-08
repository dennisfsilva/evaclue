<script lang="ts">
	import 'iconify-icon';
	const mockdata = [{
	  title: 'Pesquisa Avançada',
	  description: 'A nossa funcionalidade de pesquisa com integração num mapa interativo oferece aos utilizadores a oportunidade de explorar a nossa seleção de propriedades disponíveis e verificadas através de uma pesquisa fácil e conveniente. Através do uso de filtros personalizados, pode também refinar a sua pesquisa com base em critérios como localização, preço, dimensões, comodidades e muito mais. Encontre a casa perfeita com correspondência às suas necessidades, além de ter acesso a avaliações reais de inquilinos anteriores para as propriedades em questão.',
	  icon: 'mdi:gauge'
	}, {
	  title: 'Avaliações Autênticas',
	  description: 'Obtenha informações valiosas sobre potenciais arrendamentos através de avaliações genuínas de inquilinos anteriores. Ouça experiências em primeira mão sobre a propriedade, o proprietário, a localização e muito mais. Estas perspetivas imparciais ajudam-no a tomar decisões bem fundamentadas, garantindo uma experiência de arrendamento de longa duração positiva.',
	  icon: 'mdi:user'
	}, {
	  title: 'Comunicação Transparente',
	  description: 'Estabeleça uma ligação pessoal ao entrar em contacto direto com os proprietários. Faça perguntas, negocie termos, agende visitas e discuta os detalhes do contrato sem intermediários. Priorizamos a sua privacidade e segurança.',
	  icon: 'mdi:cookie'
	}, {
	  title: 'Gestão de Propriedades',
	  description: 'É proprietário e procura listar o seu espaço? A nossa interface intuitiva permite aos proprietários criar anúncios abrangentes, adicionar fotografias de alta qualidade e fornecer informações detalhadas sobre a sua propriedade. Otimize a visibilidade do seu imóvel na plataforma e aumente as suas chances de encontrar os inquilinos ideais ao aproveitar as avaliações dos mesmos para tomar decisões informadas.',
	  icon: 'mdi:user'
	}, {
	  title: 'Alertas Personalizados',
	  description: 'Mantenha-se à frente da concorrência com esta nossa funcionalidade. Poderá configurar alertas personalizados para receber notificações em tempo real sobre propriedades que correspondam às suas preferências específicas. Seja a localização desejada, o tipo de imóvel, o preço ou outras características importantes, os nossos alertas personalizados irão ajudá-lo a filtrar o ruído e a encontrar as opções que se enquadram perfeitamente com as suas necessidades.',
	  icon: 'mdi:cookie'
	}, {
	  title: 'Futura Funcionalidade de Reserva',
	  description: 'Ainda que a nossa plataforma esteja atualmente focada em conectar arrendatários e proprietários, temos planos ambiciosos para expandir os nossos serviços. Num futuro próximo, a Evaclue irá implementar uma funcionalidade de reserva direta, aprimorando significativamente o processo de arrendamento. Mantenha-se atento a esta empolgante evolução que estará em breve ao seu dispor.',
	  icon: 'mdi:cookie'
	}];
  </script>

<div class="container mx-auto text-left p-4 md:text-center">
	<div class="relative z-[1] space-y-6 pt-32 pb-24">
		<div class="font-bold text-4xl tracking-tight">
			Empowering Your <span class="text-tertiary-500">Feedback</span>
		</div>
		<p class="max-w-lg opacity-70 md:mx-auto">
			Priorizamos a transparência e a confiabilidade das informações fornecidas aos nossos clientes. 
			Com a Evaclue, pretendemos facilitar a tomada de decisões no setor imobiliário, tornando o processo de arrendamento mais seguro, económico e eficiente para ambas as partes envolvidas. 
		</p>
		<div class="flex flex-wrap gap-3 md:space-x-3 md:block">
			<button class="btn md:btn-lg w-full md:w-fit variant-ringed-surface">Saber Mais</button>
			<button class="btn md:btn-lg w-full md:w-fit variant-filled-tertiary"
				>Começar</button
			>
		</div>
	</div>
</div>

  <div class="container mx-auto max-w-screen-lg ">
	<div class="text-center space-y-4 p-4">
	  <span class="badge variant-filled-primary uppercase">Evaclue</span>
	  <div class="text-xl md:text-3xl font-bold"> Integrate effortlessly with any technology stack </div>
	  <p class="max-w-xl opacity-60 mx-auto after:mx-auto after:mt-3 after:bg-primary-500 after:w-12 after:h-0.5 after:block"> Every once in a while, you’ll see a Golbat that’s missing some fangs. This happens when hunger drives it to try biting a Steel-type Pokémon. </p>
	</div>
	<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 pt-16"> {#each mockdata as feature}
			  
		  <div class="card p-4 space-y-2">
			  <iconify-icon icon={feature.icon} class="text-4xl text-primary-500" />
			  <div class="font-bold after:mt-3 after:bg-primary-500 after:w-12 after:h-0.5 after:block">
					  {feature.title}
				  </div>
			  <div class="text-xs opacity-60">
					  {feature.description}
				  </div>
		  </div>
		  {/each}
	  
	  </div>
  </div>

  <div>
	white-space: break-spaces;
  </div>
