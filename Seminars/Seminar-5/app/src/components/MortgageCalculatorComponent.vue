<template>
    <div>
        <input type="number" placeholder="сумма кредита" v-model="credit"/>
        <input type="number" placeholder="процентная ставка" v-model="percent">
        <input type="number" placeholder="срок кредита" v-model="period">
    </div>
    <p>Ежемесячный платеж: {{ monthlyPayment.payByMonth }}</p>
    <p>Общая сумма выпаты: {{ monthlyPayment.total }}</p>
</template>

<script>
    export default {
        data () {
            return {
                credit: null,
                percent: null,
                period: null,
            }
        },
        computed: {
            monthlyPayment() {
                const principal = parseFloat(this.credit);
                const interestRate = parseFloat(this.percent) / 100 / 12;
                const loanTermMonths = parseFloat(this.period) * 12;

                const numberator = principal * interestRate * Math.pow(1 + interestRate, loanTermMonths);
                const denominator = Math.pow(1 + interestRate, loanTermMonths) - 1;
                const payByMonth = (numberator / denominator).toFixed(2);
                const total = (payByMonth * 12 * this.period).toFixed(2);
                return { payByMonth, total };
            }
        }
    };
</script>

<style lang="scss" scoped>

</style>