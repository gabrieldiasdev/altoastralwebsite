export const runApi = () => ({
	getLicenses: async () => {
		const licenses: string[] = [
			`O Alto Astral informa que tem o direito de a qualquer momento alterar, modificar e
            adicionar qualquer termo descrito neste documento. Ao assinar nossos serviços
            você aceita cumprir com os termos inscritos na data de contratação do serviço.
            Após a contratação dos nossos serviços e se alguma regra for adicionada ou modificada
            você não será obrigado a cumprir, desde que não seja algo de extrema importância
            que poderá afetar os serviços dos demais clientes do nosso servidor.`,

			`Esses termos são válidos apenas no servidor e suas filiais Alto Astral, caso tenha algo
            relacionado com o mesmo nome mas com os domínios abaixo não seja o mesmo,
            favor ter cuidado ao que comprar ou aceitar, e não vamos fazer a ajudá sobre a compra a
            não ser efetuada em nosso site original!`,

			`Neste momento, nós faturamos mensalmente, dependendo do plano contratado.
            Portanto não será possível solicitar um reembolso, pois você está fazendo um donate para nós.`,

			`Nós do Alto Astral, podemos mudar o valor dos serviços quando preciso,
            mas lembre-se sempre será avisado por anúncio em nosso Discord.`,

			`Nosso servidor tem uma política contra visitantes/clientes que tratarem mal nossos
            atendentes e funcionários, caso haja falta de respeito nossos funcionários ou atendentes
            não terá mais o direito de oferecer suporte ao senhor e até mesmo podendo causar
            banimento em nosso servidor.`,

			`Nós não aceitamos a revenda de produtos, caso você seja pego pela nossa equipe
            revendendo algum produto, a sua conta será punida permanentemente.`,

			`Nosso servidor não tem nenhum fim lucrativo e você não é obrigado a fazer qualquer
            tipo de doação que seja, você só faz a doação se gostar do servidor e retribuir todo
            nosso trabalho! Por isso não podemos reembolsar já que investimos sempre em melhorias
            para nossa cidade!`,

			`O produto será apenas entregue quando o pagamento for aprovado, pagamentos via boleto 
            demoram até 3 dias úteis para serem aprovados.`,
		];

		return licenses;
	},
});
