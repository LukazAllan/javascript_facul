from os import name, system

pessoas = []
# [
# {"nome":"aa", "genero":"m", "altura": 171}
# ]
teste = True

def limpa():
    if name == 'nt':
        system('cls')
    else:
        system('clear')
    

while True:
    menor = 1000
    maior = 0
    media_altura = 0
    feminino = 0
    masculino = 0
    num_pessoas = 0
    alto = None
    baixo = None

    limpa()
    print("IBGE: Dados Populacionais\nMenu\n")
    print('\t0. Sair')
    print("\t1. Adicionar Pessoa")
    print("\t2. Mostra Resultado")
    print('\t3. Adicionar 15 pessoas')


    try:
        prompt = input("> ").strip()
        if prompt == '1':
            limpa()
            print("Adicionando Pessoas\n\n")
            nome = input("Qual o nome da pessoa:").strip()
            while teste:
                genero = input("Qual o gênero da pessoa, [M/F]: ").strip().lower()
                if genero in ('m', 'f'):
                    teste = False
            teste = True
            while teste:
                try:
                    altura = int(input("Qual a altura, em centímetros, da pessoa: "))
                except ValueError:
                    pass
                else:
                    break
            
            pessoas.append({'nome': nome, 'genero': genero, 'altura':altura})
        if prompt == '2':
            limpa()
            for pessoa in pessoas:
                # {"nome":"aa", "genero":"m", "altura": 171}
                num_pessoas += 1
                if pessoa['altura'] < menor:
                    baixo = pessoa
                    menor = pessoa['altura']
                if pessoa['altura'] > maior:
                    alto = pessoa
                    maior = pessoa['altura']
                if pessoa['genero'] == 'f':
                    feminino += 1
                else:
                    media_altura += pessoa['altura']
                    masculino += 1
            if masculino > 0:
                media_altura = media_altura / masculino

            print("Resultado da Operação")
            print("---------------------------")
            print(f"Maior pessoa: {alto['nome']} {alto['genero']} {alto['altura']}")
            print(f"Menor pessoa: {baixo['nome']} {baixo['genero']} {baixo['altura']}")
            print("-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=")
            print(f"Média da altura masculina: {media_altura}")
            print("-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=")
            print(f"Quantidade de Pessoas do Gênero Feminino: {feminino}")
            input("Aperte ENTER para prosseguir...")
        
        if prompt == '3':
            for vez in range(15):
                limpa()
                print(f"Adicionando Pessoas ({vez+1}/15)\n\n")
                nome = input("Qual o nome da pessoa:").strip()
                while teste:
                    genero = input("Qual o gênero da pessoa, [M/F]: ").strip().lower()
                    if genero in ('m', 'f'):
                        teste = False
                teste = True
                while teste:
                    try:
                        altura = int(input("Qual a altura, em centímetros, da pessoa: "))
                    except ValueError:
                        pass
                    else:
                        break
                
                pessoas.append({'nome': nome, 'genero': genero, 'altura':altura})
                prompt1 = input("ENTER: SIM, Digite algo; NÃO\nContinuar? ")
                if prompt1:
                    break
        
        if prompt == "0":
            break


    except (ValueError, IndexError, ZeroDivisionError):
        pass

print('bye')